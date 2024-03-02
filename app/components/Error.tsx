type ErrorProps = {
  error: string;
  message: string;
  reset?: () => void;
};

const Error = ({ error, message, reset }: ErrorProps) => {
  return (
    <div className="mx-auto mt-10 flex w-3/4 flex-col items-center rounded-lg border-2 border-solid border-jade6 bg-jade2 text-base lg:w-80">
      <p className="w-full rounded-t-md bg-jade3 p-1">{error}</p>
      <p className="p-1">{message}</p>
      <button
        className="my-2 flex justify-center rounded-md border-jade7 bg-jade3 p-1 hover:bg-jade4"
        onClick={() => reset?.()}
      >
        Réessayer
      </button>
    </div>
  );
};

export default Error;
