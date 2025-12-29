interface ComingSoonThumbnailProps {
  className?: string;
}

const ComingSoonThumbnail = ({ className = "" }: ComingSoonThumbnailProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900 rounded-lg ${className}`}
    >
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">Coming Soon</div>
      </div>
    </div>
  );
};

export default ComingSoonThumbnail;
