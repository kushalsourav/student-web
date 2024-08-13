import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { useData } from '../../contexts/DataContext/DataContext';
import "./Groups.css"
const Groups = () => {

  const { authState, authDispatch } = useAuth();
  const { data, setData } = useData();

  const createGroup = (interest) => {

    const groupData = {
      id: Date.now(),
      name: interest,
      members: [],
      interestedUsers: [],
    }
    groupData.members.push(authState.activeUser)

    const interestedUser = authState.studentData.filter((user, i) => {
      return user.name !== authState.activeUser.name && user.interests.includes(interest)
    })

    groupData.interestedUsers.push(...interestedUser)
   
    const groupsList = JSON.parse(localStorage.getItem("groups")) || []
    groupsList.push(groupData)
    localStorage.setItem("groups", JSON.stringify(groupsList))

    const studentsJSON = JSON.parse(localStorage.getItem("students"))
    studentsJSON.map((user, i) => {
      if (user.name === authState.activeUser.name) {
       return user.groups.push(groupData)
      } 
      return user
    })
    localStorage.setItem("students", JSON.stringify(studentsJSON))

    const studentsJSONModified = JSON.parse(localStorage.getItem("students"))
    authDispatch({ type: "STU_DATA", stuData: studentsJSONModified })


  }

  const sendInvitation = (groupId, groupName, userName, index) => {
    const invitation = {
      groupId: groupId,
      groupName: groupName,
      userName: userName
    }
    const studentsJSON = JSON.parse(localStorage.getItem("students"))

    const user = studentsJSON.find((user, i) => user.name === userName)

    studentsJSON.map((e, i) => {
     
      return e.name === user.name && e.invitations.push(invitation)
    })
    localStorage.setItem("students", JSON.stringify(studentsJSON))

    const studentsJSONModified = JSON.parse(localStorage.getItem("students"))
    authDispatch({ type: "STU_DATA", stuData: studentsJSONModified })

    const groupsList = JSON.parse(localStorage.getItem("groups"))
    groupsList.map((group) => {
      if (group.id === groupId) return group.interestedUsers.splice(index, 1)
      return group
    });
    localStorage.setItem("groups", JSON.stringify(groupsList))
  }

  const acceptInvitation = (invitation, index) => {
    const groupsList = JSON.parse(localStorage.getItem("groups"))

    groupsList.map((group) => group.id === invitation.groupId && group.members.push(authState.activeUser))
    const groupData = groupsList.find((ele) => ele.id === invitation.groupId)
    localStorage.setItem("groups", JSON.stringify(groupsList))

    const studentsJSON = JSON.parse(localStorage.getItem("students"))
    studentsJSON.map((user, i) => {
      if (user.name === authState.activeUser.name) {
        return user.groups.push(groupData)
      }
      return user
    })
    localStorage.setItem("students", JSON.stringify(studentsJSON))

    const studentsJSONModified = JSON.parse(localStorage.getItem("students"))
    authDispatch({ type: "STU_DATA", stuData: studentsJSONModified })
    declineInvitation(index)

  }

  const declineInvitation = (index) => {
    const studentsJSON = JSON.parse(localStorage.getItem("students"))
    studentsJSON.map((user, i) => {
      if (user.name === authState.activeUser.name) {
       return user.invitations.splice(index, 1)
      }
      return user
    })

    localStorage.setItem("students", JSON.stringify(studentsJSON))

    const studentsJSONModified = JSON.parse(localStorage.getItem("students"))
    authDispatch({ type: "STU_DATA", stuData: studentsJSONModified })
  }



  useEffect(() => {
    const intervalId = setInterval(() => {
      const data = JSON.parse(localStorage.getItem("students"))
      authDispatch({ type: "STU_DATA", stuData: data })
      localStorage.getItem("groups")
    }, 3000)

    return () => clearInterval(intervalId);
   
  }, [authState, authDispatch])


  return (
    <div className='group'>
      <h1>groups</h1>
      <div className='groups'>
        <div>


          <div className='group-form'>

            <label >
              Interests :
              <select name="interest" className='input' value={data.interest} onChange={(e) => setData({ type: "INTREST", interest: e.target.value })}>
                <option value="" disabled>Select your Filter</option>
                {data.interests.map((interest, i) => (
                  <option key={i} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </label>
            <button className="btn btn-primary-outline input" onClick={() => {
              createGroup(data.interest)
            }}>create group</button>
          </div>

          <div>
            <div>
              <div className='group-row'>
                {
                  JSON.parse(localStorage.getItem("groups"))?.map((group, i) => {
                  
                    return group.members.some((ele) => ele.name === authState.activeUser.name)
                      &&
                      <div className='group-row-2'>
                        <div className='group-info'>
                          <h3>{group.name}</h3>
                          <h4>Team Members</h4>
                          <ul>{group.members.map((e => {
                            return (
                              <li>{e.name}</li>
                            )
                          }))}</ul>
                        </div>
                        <div className='group-interests'>
                          <h3>users with same Interest </h3>

                          {group.interestedUsers.map((invite, i) => {

                            return (

                              <div className='group-invit-col'>
                                <p>{invite.name} has same interest</p>
                                <button className='btn btn-primary' onClick={() => {
                                  sendInvitation(group.id, group.name, invite.name, i)
                                }
                                }>send invitation</button>
                              </div>


                            )
                          })}

                        </div>
                      </div>
                  })
                }
              </div>

            </div>
          </div>
        </div>
        <div className='group-invitations'>
          <h3>inivitations</h3>
          {authState.studentData.map((user) => {

            return user.name === authState.activeUser.name && user.invitations.map((e, i) => {
              return <>
                <p>{e.userName} has invited to join group {e.groupName}</p>
                <button className='btn btn-primary-outline' onClick={() => acceptInvitation(e, i)}>Accept Request</button>
                <button className='btn btn-tertiary-outline' onClick={() => declineInvitation(i)}>decline Request</button>
              </>

            }

            )
          })}
        </div>
      </div>

    </div>
  )

};

export default Groups;
