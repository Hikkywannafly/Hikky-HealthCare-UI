const headerAuth = () => {
    return (
        <>
            <div class="group grid w-fit border p-2 text-3xl " style={{ 'clip-path': 'inset(0 0 0 0 )' }} >
                <div class="flex h-10 w-10 translate-y-10 -translate-x-10 items-center justify-center transition ease-in-out [grid-area:1/1] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:delay-300">↗</div>
                <div class="flex h-10 w-10 items-center justify-center transition delay-300 duration-300 ease-in-out [grid-area:1/1] group-hover:-translate-y-10 group-hover:translate-x-10 group-hover:delay-[0s]">↗</div>
            </div>

        </>
    );
}

export default headerAuth;