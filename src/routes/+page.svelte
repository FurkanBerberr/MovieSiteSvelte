<script>
    import PopularMovies from '../components/PopularMovies.svelte'
    export let data


</script>

<section>
    <PopularMovies movies={data.props?.popular}/>
</section>
