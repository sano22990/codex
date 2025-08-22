import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function RegisterForm({ routeRegister }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');

        const res = await fetch(routeRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setMsg(data.message || 'خطا در ثبت نام');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="نام" value={form.name} onChange={handleChange} />
            <input name="email" placeholder="ایمیل" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="رمز عبور" value={form.password} onChange={handleChange} />
            <input
                type="password"
                name="password_confirmation"
                placeholder="تکرار رمز عبور"
                value={form.password_confirmation}
                onChange={handleChange}
            />
            <button type="submit">ثبت نام</button>
            {msg && <p>{msg}</p>}
        </form>
    );
}

const container = document.getElementById('register-root');
const routeRegister = container.dataset.routeRegister;
createRoot(container).render(<RegisterForm routeRegister={routeRegister} />);
