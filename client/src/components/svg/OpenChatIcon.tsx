export default function OpenChatIcon({
  size = 25,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const unit = '41';
  const height = size;
  const width = size;

  return (
    <img
      width={width}
      height={height}
      src={'https://raw.githubusercontent.com/alpayariyak/openchat/master/assets/logo_nobg.png'}
    ></img>
  );
}
