'use client'

import s from '@/app/ui/main.module.css'
import { useState, useRef, useEffect } from 'react'

const useAutoResizeTextarea = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const resize = () => {
        if (textareaRef.current) {
            // Reset the height to 'auto' to get the correct scrollHeight
            textareaRef.current.style.height = 'auto';
            // Set the height to scrollHeight to fit the content
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener('input', resize)
        }
        return () => {
            if (textareaRef.current) {
                textareaRef.current.removeEventListener('input', resize)
            }
        }
    }, [])

    return { textareaRef, resize }
}

interface FormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}



export const EnquireForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const { textareaRef, resize } = useAutoResizeTextarea()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        resize(); // Resize the textarea whenever the content changes
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        if (!response.ok) {
            console.error('Error submitting form:', response.statusText)
        } else {
            console.log('Form submitted successfully!')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className='mt-[43px] text-white'>
            <div className='flex flex-wrap gap-y-[28px] gap-x-[52px]'>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6">Your Name*</label>
                    <input type="text" name="first-name" id="name" autoComplete="given-name" value={formData.name} onChange={handleChange} required
                        className={`sm:w-[584px] block border-0 py-1.5 bg-transparent shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                    focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6 transition duration-200 ease-in-out`} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6">Email Address*</label>
                    <input type="text" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} required
                        className={`sm:w-[584px] block border-0 py-1.5 bg-transparent shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                    focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6 transition duration-200 ease-in-out`} />
                </div>
                <div>
                    <label htmlFor="tel" className="block text-sm font-medium leading-6">Contact Number*</label>
                    <input type="text" name="tel" id="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} required
                        className={`sm:w-[584px] block border-0 py-1.5 bg-transparent shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                    focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6 transition duration-200 ease-in-out`} />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium leading-6">Subject*</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                        className={`sm:w-[584px] block border-0 py-1.5 bg-transparent shadow-[white_0px_1px_0_0] ring-1 ring-inset ring-transparent
                    focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6 transition duration-200 ease-in-out`} />
                </div>
            </div>
            <div className='mt-[26px]'>
                <label htmlFor="message" className="text-sm font-medium leading-6">Your Message</label>
                <div className="mt-2">
                    <textarea ref={textareaRef} id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
                        className="xl:w-[1220px] w-full sm:w-[584px] border-0 py-1.5 bg-transparent shadow-[white_0px_1px_0_0]
                        ring-1 ring-inset ring-transparent focus:ring-1 focus:ring-inset focus:ring-white sm:leading-6"></textarea>
                </div>
            </div>
            <div className='xl:w-[1220px] sm:w-[584px]'>
                <button type="submit" className='block mt-[39px] mx-auto px-[50px] py-[15px] rounded-3xl border border-solid border-[#EDDFD0] text-sm hover:bg-white/30
                active:bg-white/60 hover:text-gray-700 active:text-black transition duration-200 ease-in-out'>
                    Submit
                </button>
            </div>
        </form>
    )
}
