type NotifyProps = {
    status: string,
    color: string,
    message: string,
}

const Notify = ({status, color, message} : NotifyProps) => {
    return (
        <div className="border-2 border-solid border-jade6">
            <p>{status}</p>
            <p>{message}</p>
        </div>
    );
};

export default Notify;