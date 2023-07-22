
export async function getStaticProps() {
    const data = null
   
    if (!data) {
      return {
        notFound: true,
      }
    }
   
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

  export default function Page({ data }) {
    return data
  }