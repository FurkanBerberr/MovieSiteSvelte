const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGRmNTYzYTRjYzY1ZmNkODdkYjM4MTE5MzJmMTkzMiIsInN1YiI6IjY0ZjQ5ODdmM2Q0M2UwMDExYjFjMjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lfAjdDGS3i5BuwbAAVUv5leYr-EcVX_Kq96yriCAOBI'
    }
};
  
export const load = async ({ fetch, params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.slug}?language=en-US`, options)
    const movieDetail = await res.json()
    if(res.ok){
        return{
            props: {
                movieDetail
            }
        }
    }
}
  