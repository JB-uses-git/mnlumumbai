import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { Lock, Mail, Eye, EyeOff, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Redirect if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        const from = location.state?.from?.pathname || '/admin'
        navigate(from, { replace: true })
      }
    })
  }, [navigate, location])

  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password
      })

      if (error) {
        throw error
      }

      if (data?.session) {
        const from = location.state?.from?.pathname || '/admin'
        navigate(from, { replace: true })
      }
    } catch (err) {
      console.error('Login error:', err)
      setErrorMessage(err.message || 'Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FEFDF5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-[#43302E]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <Link
          to="/"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#43302E]/70 hover:text-[#43302E] transition-colors mb-6 gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Back to CALSTAR Website
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#43302E] text-[#FFE8A3] flex items-center justify-center shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#43302E]">CALSTAR Admin</h1>
            <p className="text-xs text-[#43302E]/70">Centre for Air & Space Law, MNLU Mumbai</p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-xl shadow-[#43302E]/5 rounded-2xl border border-[#43302E]/10 sm:px-10">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#43302E]">Sign in to Admin Dashboard</h2>
            <p className="text-xs text-[#43302E]/70 mt-1">
              Enter your credentials to manage faculty, office bearers, and events.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-700 flex items-start gap-2">
              <span className="font-bold">⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold text-[#43302E] uppercase tracking-wider mb-1.5">
                Admin Email
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#43302E]/50">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@calstar.mnlumumbai.edu"
                  className="block w-full pl-10 pr-3 py-2.5 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] placeholder-[#43302E]/40 focus:outline-none focus:ring-2 focus:ring-[#43302E] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#43302E] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#43302E]/50">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-10 py-2.5 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] placeholder-[#43302E]/40 focus:outline-none focus:ring-2 focus:ring-[#43302E] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#43302E]/50 hover:text-[#43302E] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-md text-sm font-bold text-[#FFE8A3] bg-[#43302E] hover:bg-[#2e211f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43302E] disabled:opacity-50 transition-all cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Signing in...
                  </>
                ) : (
                  'Sign In to Dashboard'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-[#43302E]/10 text-center">
            <p className="text-xs text-[#43302E]/60">
              Credentials are authenticated directly via Supabase Auth with encrypted tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
