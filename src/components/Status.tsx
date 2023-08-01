type StatusProps = {
    status: "Error" | "Success" | "Loading"
}
export const Status = (props: StatusProps) => {
    let message
    if (props.status === "Loading") {
        message = "is Loading ..."
    } else if (props.status === "Success") {
        message = "Data Fetches SuccessFully from Server"
    } else {
        message = "Error Accourd during Fetching Data From server"
    }
    return (
        <div>
            status - {message}
        </div>
    )
}