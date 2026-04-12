import { createContext, useState, useEffect } from "react";
import db from "../../db.json";

export const UsersContext = createContext();

const UserContext = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const usersData = db.users || [];
        setUsers(usersData);

        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            const userFromStorage = usersData.find((user) => user.id === storedUserId);
            setCurrentUser(userFromStorage || null);
        }
    }, []);

    return (
        <UsersContext.Provider value={{ users, currentUser, setCurrentUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UserContext;
