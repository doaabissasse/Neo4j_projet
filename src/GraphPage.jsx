import React, { useEffect, useRef } from "react";
import NeoVis from "neovis.js";

const GraphPage = () => {
  const containerRef = useRef();

  useEffect(() => {
    const config = {
      container_id: containerRef.current,
      server_url: "bolt://neo4j:7687",  // Important : utiliser le nom du service Docker Neo4j
      server_user: "neo4j",
      server_password: "your_password",
      labels: { Person: { caption: "name" } },
      relationships: { KNOWS: { caption: true } },
      initial_cypher: "MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 50",
    };
    const viz = new NeoVis(config);
    viz.render();
  }, []);

  return (
    <div>
      <h2>Graph Neo4j</h2>
      <div ref={containerRef} style={{ height: "600px", border: "1px solid gray" }} />
    </div>
  );
};

export default GraphPage;
