export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main className="h-full bg-white rounded-xl p-3">
            {children}
        </main>
    );
}