'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1100));
        setLoading(false);
        alert('Account created (demo)');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-emerald-50 py-8 sm:py-12 px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
                <div className="hidden md:flex flex-col justify-center items-start p-4 sm:p-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Create your account</h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">Get personalized alerts, save favourites and manage listings you care about.</p>
                    <div className="mt-4 sm:mt-6 w-full">
                        <img src="/signup-illustration.svg" alt="illustration" className="w-full opacity-90" />
                    </div>
                </div>

                <div className="p-1 sm:p-2">
                    <div className="text-center md:text-left mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Sign up</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Start your journey with MapleNest — it's quick and easy.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                            <input 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                                className="block w-full rounded-md border border-gray-300 p-2.5 sm:p-3 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 text-sm sm:text-base" 
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                type="email" 
                                required 
                                className="block w-full rounded-md border border-gray-300 p-2.5 sm:p-3 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 text-sm sm:text-base" 
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                type="password" 
                                required 
                                className="block w-full rounded-md border border-gray-300 p-2.5 sm:p-3 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 text-sm sm:text-base" 
                                placeholder="Create a password"
                            />
                        </div>

                        <div className="flex items-start gap-3">
                            <input type="checkbox" id="agree" className="h-4 w-4 mt-0.5 flex-shrink-0" required />
                            <label htmlFor="agree" className="text-xs sm:text-sm text-gray-600 leading-relaxed">I agree to the Terms and Privacy Policy</label>
                        </div>

                        <Button type="submit" className="w-full btn-mobile" disabled={loading}>
                            {loading ? 'Creating...' : 'Create account'}
                        </Button>
                    </form>

                    <div className="mt-4 sm:mt-6 text-center md:text-left text-xs sm:text-sm text-gray-600">
                        Already have an account? <Link href="/login" className="text-emerald-600 font-medium hover:underline">Log in</Link>
                    </div>

                    <div className="mt-3 sm:mt-4 text-center md:text-left">
                        <Link href="/" className="text-xs sm:text-sm text-gray-500 hover:underline">Back to home</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
