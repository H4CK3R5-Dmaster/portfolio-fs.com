import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PublicLayout from "../../layout/layoutheader";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../utils/chakra-ui-theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <PublicLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PublicLayout>
  );
}
