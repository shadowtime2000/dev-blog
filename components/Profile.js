import { useState, useEffect } from 'react'

import axios from 'axios'

import { Link } from '@material-ui/core'

import styles from '../styles/Profile.module.css'

export default function Profile() {

    const [avatarURL, setAvatarURL] = useState("")
    const [summary, setSummary] = useState(process.env.NEXT_PUBLIC_PLACEHOLDER_SUMMARY)

    useEffect(() => {
        axios.get(`https://api.github.com/users/${process.env.NEXT_PUBLIC_USERNAME}`)
            .then((res) => res.data)
            .then(res => setAvatarURL(res.avatar_url))
    }, [])

    useEffect(() => {
        axios.get(`https://dev.to/api/users/by_username?url=${process.env.NEXT_PUBLIC_USERNAME}`)
        .then(res => res.data)
        .then(res => setSummary(res.summary))
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