import { useState, useEffect } from 'react'

import axios from 'axios'

import { Link } from '@material-ui/core'

import styles from '../styles/Profile.module.css'

export default function Profile() {

    const [avatarURL, setAvatarURL] = useState("")
    const [websiteURL, setWebsiteURL] = useState(`https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`)
    const [summary, setSummary] = useState("Summary Here")

    useEffect(() => {
        axios.get(`https://dev.to/api/users/by_username?url=${process.env.NEXT_PUBLIC_USERNAME}`)
        .then(res => res.data)
        .then(res => {
            setSummary(res.summary)
            return res
        })
        .then(res => {
            setAvatarURL(res.profile_image)
            return res
        })
        .then(res => setWebsiteURL(res.website_url || websiteURL))
    }, [])

    return (
        <div className={styles.profile}>
            <h3><Link href={websiteURL} color="inherit" target="_blank">{process.env.NEXT_PUBLIC_USERNAME}</Link></h3>
            <p>
                {summary}
            </p>

            <img width={50} src={avatarURL} alt={`${process.env.NEXT_PUBLIC_USERNAME}'s DEV profile image`} />
        </div>
    )
}