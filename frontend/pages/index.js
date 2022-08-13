import Head from "next/head";
import { Container } from "react-bootstrap";
import DetailTable from "../pages/components/DetailTable";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="position-relative overflow-hidden p-0 p-md-5 text-center semi-bg text-success">
                <div className="col-md-5 p-lg-5 mx-auto my-5"></div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <Container className="mt-5">
                <DetailTable />
            </Container>
        </div>
    );
}
