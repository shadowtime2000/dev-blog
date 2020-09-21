import { useState, useEffect } from 'react'

import axios from 'axios'

import { Link } from '@material-ui/core'

import styles from '../styles/Profile.module.css'

export default function Profile() {

    const [avatarURL, setAvatarURL] = useState("")
    const [summary, setSummary] = useState("Summary Here")

    useEffect(() => {
        axios.get(`https://dev.to/api/users/by_username?url=${process.env.NEXT_PUBLIC_USERNAME}`)
        .then(res => res.data)
        .then(res => {
            setSummary(res.summary)
            return res
        })
        .then(res => setAvatarURL(res.profile_image))
    }, [])

    return (
        <div className={styles.profile}>
            <h3><Link href={`https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`} color="inherit" target="_blank">{process.env.NEXT_PUBLIC_USERNAME}</Link></h3>
            <p>
                {summary}
            </p>

            <img width={50} src={avatarURL} />
        </div>
    )
}