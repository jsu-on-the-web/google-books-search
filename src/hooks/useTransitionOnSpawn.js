import { useState, useEffect } from "react";

/*----------  Function Declaration  ----------*/

/**
 * A hook that manages the transition state of a component when iy spawns in.
 *
 * @param {boolean} isSpawned - indicates whether the component has spawned or not
 * @param {number} despawnDelay - the delay in milliseconds before the component is despawned
 * @return {boolean} true if the component has transitioned in, false otherwise
 */
export const useTransitionOnSpawn = (isSpawned, despawnDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

    // Making use of useEffect for the actual logic of the hook
    useEffect(() => {
        let timeoutId;

        if (isSpawned) {
            setHasTransitionedIn(true);
        } else if (!isSpawned && hasTransitionedIn) { 
            // Currently despawning/unmounting.
            timeoutId = setTimeout(() => {
                setHasTransitionedIn(false);
            }, despawnDelay);
        }

        return () => {
            // Get rid of the timeout
            clearTimeout(timeoutId);
        };
    }, [despawnDelay, isSpawned, hasTransitionedIn]);

    return hasTransitionedIn;
}

export default useTransitionOnSpawn;