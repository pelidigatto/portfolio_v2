export default function OfflinePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-3xl font-bold mb-4">📴 Du bist offline</h1>
            <p className="text-lg">Diese Seite ist im Moment nicht verfügbar.</p>
            <p className="text-sm mt-2 text-gray-500">Bitte stelle eine Internetverbindung her und lade die Seite neu.</p>
        </div>
    );
}
