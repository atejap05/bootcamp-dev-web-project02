import {sha256} from "crypto-hash";
import axios from 'axios'

/**
 * @typedef {object} User
 * @property {string} username
 * @property {string} password
 */

/**
 *
 * @param user {User}
 * @returns {Promise<string>}
 */
export const validateHash = user => {

    return new Promise((resolve, reject) => {

        axios.get(`https://ironrest.cyclic.app/findOne/appbooks?usuario=${user.username}`)
            .then(response => {
                if (!response && !response.data) {
                    reject(false)
                }

                const usuario = response.data

                console.log(usuario)

                sha256(user.password)
                    .then(hash => {
                        if (hash === usuario['senha']) {
                            resolve(true)
                        }
                        reject(false)
                    })
            })
    })
};


export const registerNewUser = (data) => {

    return new Promise((resolve, reject) => {

        sha256(data.password)
            .then(hash => {
                axios.post(`https://ironrest.cyclic.app/appbooks`, {
                    "usuario": data.username,
                    "senha": hash,
                    "favorito": null
                }).then(res => {
                    console.log(res)
                    resolve(true)
                })
            })
    })

}