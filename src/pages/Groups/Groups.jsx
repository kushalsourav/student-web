import React from 'react';
import { useData } from '../../contexts/DataContext/DataContext';

const Groups = () => {
    const { data, setData } = useData();
     console.log(data)
    const createGroup = (interest) => {
        const interestedUsers = data.users.filter((user) => user.interests.includes(interest));
        const newGroup = { id: Date.now(), interest, members: [] };
        setData({ type: "GROUP", groups: newGroup })

        interestedUsers.forEach((user) => {
            sendInvitation(newGroup.id, user.name);
        });
    };

    const sendInvitation = (groupId, receiverName) => {
        const newInvitation = { id: Date.now(), groupId, receiverName };
        setData({type:"INVIT" , invite: newInvitation})

    };
    return (
        <div>
            <div>
                <h2>Create Group</h2>
                <select name="Filters" value={data.interest} onChange={(e) => setData({ type: "INTREST", interest: e.target.value })}>
                    <option value="" disabled>Select your Filter</option>
                    {data.interests.map((interests) => (
                        <option key={interests} value={interests}>
                            {interests}
                        </option>
                    ))}
                </select>
                <button onClick={() => createGroup(data.filter)} >Create Group</button>
            </div>

            <div>
        <h2>Invitations</h2>
 
        {data.invitations.map((invitation) => (
          <div key={invitation.id}>
            <p>
              {invitation.receiverName} is invited to join a group based on {data.groups.find(grp => grp.id === invitation.groupId)?.interest}.
            </p>
    
          </div>
        ))}
      </div>
            <div>
                <h3>groups List</h3>
                {
                    data.groups.map((group) => {
                        return (
                            <>
                            <div key={group.id}>
            <h3>Group: {group.name}</h3>
            <p>Members: {group.members.join(", ")}</p>
          </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Groups;
