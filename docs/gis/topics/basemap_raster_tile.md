# Basemap - Raster Tile

## OSM Links

- https://github.com/geosolutions-it/osm-styles
- https://github.com/kartoza/docker-osm
- https://github.com/kartoza/docker-osm-examples

## Vector Links

- https://github.com/CrunchyData/pg_tileserv

## Links

- https://mapproxy.org/docs/latest/install.html
- https://github.com/Overv/openstreetmap-tile-server
- https://github.com/maptiler/tileserver-php
- https://wiki.openstreetmap.org/wiki/List_of_OSM-based_services

## Layers

| Layer                                | Style             | Description |
|--------------------------------------|-------------------|-------------|
| ne_10m_bathymetry                    | bathymetry_light  |             |
| simplified_water_polygons            | simplified_water  |             |
| water_polygon                        | water             |             |
| land_polygon                         | coast_poly        |             |
| simplified_land_polygons             | world             |             |
| icesheet_polygons                    | icesheet          |             |
| icesheet_outlines                    | icesheet_outlines |             |
| ne_10m_admin_1_states_provines_lines | all_regions       |             |
| landusages                           | landusages        |             |
| waterareas                           | waterareas        |             |
| waterways                            | waterways         |             |
| builtup_area                         | buildup           |             |
| ne_10m_admin_0_boundary_lines_land   | all_boundaries    |             |
| osm_boundary                         | boundaries        |             |
| osm_transport_areas                  | transport_areas   |             |
| osm_buildings                        | buildings         |             |
| roads                                | roads             |             |
| ne_10m_admin_0_countries_points      | states            |             |
| osm_housenumbers                     | addresses         |             |
| osm_admin                            | admin_labels      |             |
| osm_places                           | places            |             |
| osm_amenities                        | amenities         |             |
| osm_transport_points                 | transport_points  |             |


Labels:
- wld_oceans_pt
- wld_continents
- wld_cities
- vn_provinces, vn_districts, vn_wards


Extra
- vn_country_mask
- wld_boundary
- vn_boundary


Order
- osm:ne_10m_bathymetry / bathymetry_bcg
- osm:bcg_ne_10m_admin_0_boundary_lines_land / bcg_boundary_lines
- osm:wld_continents_pt / wld_continents_pt
- osm:wld_oceans_pt / wld_oceans_pt
- osm:ne_10m_admin_0_countries_points / states



- https://wiki.openstreetmap.org/wiki/Zoom_levels

World
- wld_admin_pt
- wld_cities
- wld_continents_pt
- wld_oceans_pt
- wld_seas_pt

VN
- vn_admin_pt
- vn_admin_ln
- vn_island_pt
- vn_boundary_mask
- vn_vietnam

LayerGroups:
- osm_cust_bg
  - osm:ne_10m_bathymetry
  - osm:simplified_water_polygons
  - osm:water_polygons
  - osm:land_polygons
  - osm:simplified_land_polygons
  - osm:icesheet_polygons
  - osm:icesheet_outlines
  - osm:ne_10m_admin_1_states_provinces_lines (Removed)
  - osm:landusages
  - osm:waterareas
  - osm:waterways
  - osm:builtup_area (Removed)
  - osm:vn_boundary_mask (Added)
  - osm:osm_transport_areas
  - osm:roads
  - osm:osm_buildings
  - osm:ne_10m_admin_0_boundary_lines_land (Replaced wld_boundary)
  - osm:ne_10m_admin_0_countries_points
  - osm:osm_housenumbers
  - osm:osm_admin
  - osm:osm_places
  - osm:osm_amenities
  - osm:osm_transport_points
- osm_cust_labels
  - wld_continents_pt
  - wld_oceans_pt
  - wld_islands_pt
  - wld_admin_pt
  - wld_cities
  - osm:osm_housenumbers (Optional)
- osm_cust
  - osm_cust_bg
  - osm_cust_labels
- osm_cust_hillshade
  - osm_cust_bg
  - osm_cust_labels
  - wld_hillshade
  - vn_hillshade


Check
- waterareas
- Lượt bớt landusages
- Chỉnh scale hiển thị waterways, waterareas
- Cập nhật icon osm_transport_points, osm_amenities



###

```shell
wget https://download.geofabrik.de/asia/vietnam-latest.osm.pbf
docker volume create openstreetmap-data
time docker run -v ./vietnam-latest.osm.pbf:/data.osm.pbf -v openstreetmap-data:/var/lib/postgresql/12/main overv/openstreetmap-tile-server:1.3.10 import
docker run -p 8080:80 -v openstreetmap-data:/var/lib/postgresql/12/main -d overv/openstreetmap-tile-server:1.3.10 run
```

https://github.com/wcedmisten/docker-openstreetmap-stack/blob/main/docker-compose.yml

https://xranks.com/alternative/nominatim.org