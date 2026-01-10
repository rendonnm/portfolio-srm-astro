import { Map as MapCn, MapControls } from "@/components/ui/map";

export function BentoMap() {
  return (
    <div className="dark w-full h-full min-h-50">
      <MapCn center={[-75.587374, 6.170049]} zoom={13.9}>
        <MapControls position="bottom-right" showZoom />
      </MapCn>
    </div>
  );
}
