import React, { useState } from 'react';


const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Analyzing...</span>
  </div>
);


function App() {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await fetch('http://localhost:3001/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'Something went wrong with the server.');
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        
        <div className="bg-stone-100 min-h-screen font-sans flex flex-col items-center p-4 sm:p-8 transition-colors duration-300">
            <header className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight">CommunicateAI Demo</h1>
                <p className="text-slate-500 mt-3 text-lg">Paste your text below for instant AI-powered feedback.</p>
            </header>

            
            <main className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow-md border border-slate-200">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Example: 'I think we should probably consider maybe looking into new options.'"
                        rows="6"
                        required
                        
                        className="w-full p-4 bg-stone-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        
                        className="w-full mt-4 bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                        {isLoading ? <LoadingSpinner /> : 'Analyze My Communication'}
                    </button>
                </form>

                {error && <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg animate-fade-in">{error}</div>}

                {result && (
                    <div className="mt-8 text-left space-y-4 animate-fade-in">
                        <h2 className="text-2xl font-bold text-slate-800">Analysis Complete</h2>
                        <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                            <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wider">Clarity Score</h3>
                            <p className="text-3xl font-bold text-slate-700 mt-1">{result.clarityScore} / 100</p>
                        </div>
                        <div className="p-5 border-l-4 border-green-500 bg-green-50 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                            <h3 className="font-semibold text-green-800 text-sm uppercase tracking-wider">What Went Well</h3>
                            <p className="text-slate-700 mt-1">{result.positiveFeedback}</p>
                        </div>
                        <div className="p-5 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                            <h3 className="font-semibold text-yellow-800 text-sm uppercase tracking-wider">Improvement Suggestion</h3>
                            <p className="text-slate-700 mt-1">{result.improvementSuggestion}</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;