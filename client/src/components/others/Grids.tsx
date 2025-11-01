import maskGrid from "@assets/svg/maskGrid.svg";
import perspectiveGrid from "@assets/images/perspectiveGrid.png";

type Props = {
  variant: "perspective" | "mask";
  height?: string;
};

function Grids({ variant, height }: Props) {
  if (variant === "perspective") {
    return (
      <img
        src={perspectiveGrid}
        className="absolute min-w-[50pc] self-center md:min-w-auto dark:opacity-25"
        alt="grid perspective"
      />
    );
  }

  if (variant === "mask") {
    return (
      <img
        src={maskGrid}
        alt="grid mask"
        style={{ height }}
        className="absolute top-0 left-1/2 z-0 min-w-[50pc] -translate-x-1/2 transform object-cover opacity-75 invert-[90%] dark:opacity-50 dark:invert-[20%]"
      />
    );
  }
}

export default Grids;
