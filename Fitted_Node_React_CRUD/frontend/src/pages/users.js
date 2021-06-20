import React from "react"

const UsersPage = () => {
    return (
        <div>
            <ul>
                {["Akir", "Roberto", "Xi", "Raskolnikov", "Jens"].map((user, idx) => {
                return <li key = {idx} > {user}</li>
                })}
            </ul>
        </div>
    )
}

export default UsersPage;