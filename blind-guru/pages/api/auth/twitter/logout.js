import { getSession } from "lib/get-session.js";
import { getCookie } from 'cookies-next';

export default async function handler (req, res) {
    removeCookies('user', { req, res });
    res.redirect('/');
}