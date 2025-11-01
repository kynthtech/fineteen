import SelectControlled from "@components/interfaces/Controlled/SelectControlled";
import Input from "@components/interfaces/Input";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
import { useLocation, useNavigate, useSearchParams } from "react-router";

type FilterProps = {
  search: string;
  difficulty: string;
  category: string;
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

  const categoryOptions = [
    {
      value: "investment",
      label: "Investment",
    },
    {
      value: "programming",
      label: "Programming",
    },
  ];

  const difficultyOptions = [
    {
      value: "beginner",
      label: "Beginner",
    },
    {
      value: "intermediate",
      label: "Intermediate",
    },
    {
      value: "advanced",
      label: "Advanced",
    },
  ];

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
      difficulty: "",
      category: "",
    });
    if (isFilterClick) {
      navigate(`${pathname}?page=1`);
    }
    setIsFilterClick(false);
  };

  return (
    <div className="sm:pt-6">
      <form
        className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        onSubmit={handleSubmit(handleFilter)}
      >
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
          <Input
            size="3"
            radius="medium"
            BgColor="bg-gray-800"
            icon={MdSearch}
            {...register("search")}
            placeholder="Search by course same..."
          />
          <SelectControlled
            name="category"
            control={control}
            options={categoryOptions}
            placeholder="All Category"
          />
          <SelectControlled
            name="difficulty"
            control={control}
            options={difficultyOptions}
            placeholder="All difficulty"
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
