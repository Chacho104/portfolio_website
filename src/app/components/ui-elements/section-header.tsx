interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="w-full space-y-10 pb-10">
      <div
        className="w-20 border-t-2 border-headings"
        aria-label="A div to render a small to border"
      />
      <h1 className="text-4xl text-headings leading-snug font-mono">{title}</h1>
    </div>
  );
};

export default SectionHeader;
