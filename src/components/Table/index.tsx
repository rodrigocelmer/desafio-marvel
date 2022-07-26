import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';

type Hero = {
  name: string
}

type TableProps = {
  heroes: Array<Hero>
}

export default function SimpleTable(props: TableProps) {
  const sortedHeroes = props.heroes.sort((a, b) => a.name.localeCompare(b.name))
  console.log(sortedHeroes)

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '75vh' }} >
      <Table size="small">
        <TableBody>
          {sortedHeroes.map((hero) => (
            <TableRow 
              key={hero.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}>
                <Button variant='text' sx={{width: '100%', color: 'black'}}>{hero.name}</Button>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
