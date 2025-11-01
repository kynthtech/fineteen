import { getNestedError } from "@utils/getNestedError";
import clsx from "clsx";
import React, { Fragment } from "react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";

type FileUploadProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errors: FieldErrors;
  name: string;
  control: Control<any>;
  errorMessage?: string;
  isRequired?: boolean;
  accept?: string;
};

const FileUploadControlled: React.FC<FileUploadProps> = (
  props: FileUploadProps,
) => {
  const error = getNestedError(props.errors, props.name);

  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldOnChange: any,
  ) => {
    props.onChange?.(event);
    const file = event.target.files?.[0] || null;
    if (file) {
      fieldOnChange(file);
    } else {
      fieldOnChange(null);
    }
  };

  return (
    <Fragment>
      <Controller
        name={props.name}
        control={props.control}
        rules={{
          required: props.isRequired
            ? props.errorMessage || "This field is required"
            : false,
        }}
        render={({ field: { onChange, value } }) => (
          <div
            className={clsx(
              "flex w-full items-center overflow-hidden rounded-md border-[1.1px] border-gray-400/60 bg-white transition-colors duration-200 active:border-cyan-600 dark:border-gray-700 dark:bg-gray-800",
              props.className,
            )}
          >
            <label className="cursor-pointer bg-gray-100 p-[5px] px-3 text-nowrap text-gray-700 transition-colors hover:bg-gray-200 sm:p-[7px] sm:px-4 sm:text-base dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600">
              Choose File
              <input
                type="file"
                accept={props.accept}
                className="hidden"
                onChange={(event) => handleChange(event, onChange)}
              />
            </label>
            <span className="ml-4 truncate text-sm text-gray-700 dark:text-gray-300">
              {value instanceof File ? value.name : value || "No file selected"}
            </span>
          </div>
        )}
      />
      {error && (
        <p className="text-sm text-red-500 italic">
          {error?.message as string}
        </p>
      )}
    </Fragment>
  );
};

export default FileUploadControlled;
