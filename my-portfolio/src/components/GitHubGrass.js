import { margin } from '@mui/system';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubGrass = () => {
  return (
    <div style={{ 
      width: "95%",
      textAlign: "center",
      margin: "20px"
    }}>
      <GitHubCalendar
        username="wanwan0622"
        blockRadius="10"
        theme={{
          light: ["#EBEDF0", "#f2b5d3", "#f39ac7", "#f280b9", "#ed4e9b"],
          dark: ["#EBEDF0", "#f2b5d3", "#f39ac7", "#f280b9", "#ed4e9b"]
        }}
      />
    </div>
  );
};

export default GitHubGrass;