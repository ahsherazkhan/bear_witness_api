'use client'

import ErrorBoundary from '../components/ErrorBoundary'

export default function Error({ error, reset }) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-medium text-onBackground mb-2">Something went wrong!</h2>
          <p className="text-onBackground/70 mb-8">
            {error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={reset}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </ErrorBoundary>
  )
} 