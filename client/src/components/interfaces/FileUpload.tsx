import clsx from "clsx";
import React, { Fragment, useState } from "react";

type FileUploadProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  name: string;
  accept?: string;
};

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file ? file.name : "");
    if (file) {
      if (props.onChange) {
        props.onChange(e);
      }
    }
  };

  return (
    <Fragment>
      <div
        className={clsx(
          "flex w-full items-center overflow-hidden rounded-md border-[1.1px] border-gray-400/60 bg-white transition-colors duration-200 active:border-cyan-600 dark:border-gray-700 dark:bg-gray-800",
          props.className,
        )}
      >
        <label className="font-base cursor-pointer bg-gray-100 p-[5px] px-3 text-nowrap text-gray-700 transition-colors hover:bg-gray-200 sm:p-[7px] sm:px-4 sm:text-base dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600">
          Choose File
          <input
            name={props.name}
            type="file"
            onChange={handleFileChange}
            accept={props.accept}
            className="hidden"
          />
        </label>
        <span
          id={props.name + "-span"}
          className="ml-4 truncate text-sm text-gray-700 dark:text-gray-300"
          title={fileName}
        >
          {fileName || "No file selected"}
        </span>
      </div>
    </Fragment>
  );
};

export default FileUpload;
