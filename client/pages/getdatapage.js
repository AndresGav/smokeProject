import { useEffect } from "react";
import { userData } from "../data/data.users";

export default function TestUser() {
  const users = userData;
  

  useEffect(() => {
      
  }, []);
  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id} className="flex gap-4">
            <p> {user.user}</p>
            <p> {user.password}</p>
            <p> {user.city}</p>
          </div>
        ))}
        <input type="submit" value={"Alertar"} onClick={alert("sdf")}></input>
      </div>
    </>
  );
}
