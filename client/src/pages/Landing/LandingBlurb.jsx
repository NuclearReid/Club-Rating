export default function LandingBlurb() {

    return(
        <>
        {/* Title section - full width on mobile, 2/3 width on md and up */}
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center text-white p-6 md:p-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-center">
                Club Rating
                </h1>
                <p className="text-lg md:text-xl max-w-2xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget
                ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
                tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget
                nisl.
                </p>
            </div>
        </>
    )
}