// NEXT
import Image from 'next/image';

// TYPESCRIPT
type Props = {
  text?: string;
};

const Badge = ({ text = 'OffQuest' }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 text-2xl bg-gray-700 border border-gray-500 shadow-md rounded-xl w-fit shadow-blue-600">
      <Image
        src="/logo.png"
        alt="OffQuest Logo"
        width={40}
        height={40}
        priority
        blurDataURL="/logo.png"
        placeholder="blur"
      />
      <p className="text-3xl">{text}</p>
    </div>
  );
};

export default Badge;
