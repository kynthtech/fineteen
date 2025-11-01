import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import SelectControlled from "@components/interfaces/Controlled/SelectControlled";
import { classStandardDataSelect } from "@utils/classStandardData";

type FilterProps = {
  search: string;
  classStandard: string;
  status: string;
};

function Filter() {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FilterProps>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isFilterClick, setIsFilterClick] = useState(false);
  const [_, setSearchParams] = useSearchParams();

  const handleFilter = async (params: FilterProps) => {
    setIsFilterClick(true);

    const cleanedData = Object.fromEntries(
      Object.entries(params).map(([k, v]) => [k, v ?? ""]),
    );

    setSearchParams({ page: "1", ...cleanedData });
  };

  const handleClearFilter = () => {
    reset({
      status: "",
      classStandard: "",
    });
    if (isFilterClick) {
      navigate(`${pathname}?page=1`);
    }
    setIsFilterClick(false);
  };

  const statusOptions = [
    {
      value: "passed",
      label: "Passed",
    },
    {
      value: "failed",
      label: "Failed",
    },
  ];

  return (
    <div className="sm:pt-6">
      <form
        className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        onSubmit={handleSubmit(handleFilter)}
      >
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <SelectControlled
            name="status"
            control={control}
            placeholder="Select Status"
            options={statusOptions}
            BgColor="bg-gray-800"
          />
          <SelectControlled
            name="classStandard"
            control={control}
            placeholder="Select class standard"
            options={classStandardDataSelect}
            BgColor="bg-gray-800"
          />
        </div>
        {isDirty && (
          <div className="flex gap-4 self-end sm:self-auto">
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleClearFilter();
              }}
              variant="soft"
              color="gray"
              radius="medium"
              size="3"
            >
              Clear
            </Button>
            <Button variant="solid" radius="medium" size="3">
              Filter
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Filter;
