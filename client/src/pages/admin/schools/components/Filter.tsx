import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
import Input from "@components/interfaces/Input";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import DatePickerControlled from "@components/interfaces/Controlled/DatePickerControlled";

type FilterProps = {
  search: string;
  date: string;
};

function Filter() {
  const {
    register,
    handleSubmit,
    control,
    reset,
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
      search: "",
      date: "",
    });
    if (isFilterClick) {
      navigate(`${pathname}`);
    }
    setIsFilterClick(false);
  };

  return (
    <div className="sm:pt-6">
      <form
        className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        onSubmit={handleSubmit(handleFilter)}
      >
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <Input
            size="3"
            radius="medium"
            BgColor="bg-gray-800"
            icon={MdSearch}
            {...register("search")}
            placeholder="Search by school name..."
          />
          <DatePickerControlled
            errors={""}
            name="date"
            errorMessage=""
            control={control}
            isRequired={false}
            placeholder="Select Submit Date"
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
