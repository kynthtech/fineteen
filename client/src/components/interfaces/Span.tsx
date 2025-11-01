type Props = {
  children?: React.ReactNode;
};

function Span({ children }: Props) {
  if (!children) {
    return <span className="text-gray-400 italic">N/A</span>;
  }
  return <span>{children}</span>;
}

export default Span;
