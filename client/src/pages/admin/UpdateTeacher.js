import React,{useEffect, useState} from 'react'
import Layout from './../../components/Layout'
import axios from 'axios'
const UpdateTeacher = () => {
const [UpdateTeacher, setUsers] = useState({})

//getUpdateTeacher
const getUpdateTeacher = async() => {
  try {
    const res = await axios.get('/api/v1/admin/getUpdateTeacher',{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    if(res.data.success){
      setUsers(res.data.data)
    }
  } catch (error) {
    console.log(error)

  }
}
  useEffect(() => {
    getUpdateTeacher()
  },[])

  return (
    <Layout>
        <h1>Teachers List</h1>
    </Layout>
  )
}

export default UpdateTeacher