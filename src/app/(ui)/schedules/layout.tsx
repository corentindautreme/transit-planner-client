export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main className="h-full p-3 overflow-y-scroll">
            {children}
        </main>
    );
}