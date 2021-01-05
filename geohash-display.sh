#!/bin/sh -e

# Shell implementation provided by Geohashing Wiki
# https://geohashing.site/geohashing/Implementations/Libraries/Shell

if [ $# -lt 2 ] ; then # Default graticule: Detroit
	: ${LAT:="42"}
	: ${LON:="-83"}
else
	: ${LAT:="$1"}
	: ${LON:="$2"}
fi

showGeoHash()
{
	echo "https://openstreetmap.org/?lat=${1}%lon=${2}"
}

showGeoHash $(./geohash.sh $LAT $LON)
