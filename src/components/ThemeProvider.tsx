import {ThemeProvider} from 'next-themes'
export default function RootLayout({ children }: { children?: string }){
    return(
        <html lang="eng" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}