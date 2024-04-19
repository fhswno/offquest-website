// NEXT
import Image from 'next/image';

// CLSX
import clsx from 'clsx';

// ENUMS
import { ShadowColor } from '../../../enums/branding-enums';

// TYPESCRIPT
type Props = {
  text?: string;
  shadowColor?: ShadowColor;
};

const Badge = ({
  text = 'OffQuest',
  shadowColor = ShadowColor.BLUE,
}: Props) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-4 p-4 text-2xl bg-gray-700 border border-gray-500 shadow-md rounded-xl w-fit',
        shadowColor === 'blue' && 'shadow-blue-600',
        shadowColor === 'green' && 'shadow-green-600',
      )}
    >
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
