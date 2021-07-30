function Home () {
    return (
            <section id="hero" className="h-screen bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 ... text-white text-center grid place-items-center">
              <div>
                <p className="text-lg font-bold italic uppercase tracking-wider text-5xl">Jenny from</p>
                <h1 className="font-bold text-8xl leading-none">THE BLOCK</h1>
                <p className="font-mono text-2xl py-4">Engineering and Science Education</p>
                <a href="https://www.linkedin.com/in/jpshaff/" 
                        rel="noopener noreferrer" 
                        target="_blank"
                        class="mt-10 bg-white shadow rounded-lg px-8 py-4 text-blue-900 inline-block"
                >Connect via LinkedIn (and not 867-5309)</a>
               </div>
           </section>
    );
}

export default Home;