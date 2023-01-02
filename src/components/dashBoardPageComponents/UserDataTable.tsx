import { useEffect, useState } from "react";
import TableHead from "@mui/material/TableHead";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterForm from "./FilterForm";
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

export default function MaterialTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<
    {
      orgName: string;
      userName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
    }[]
  >([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  async function getAllUsers() {
    try {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      return await response.json();
    } catch (error) {
      return [];
    }
  }
  const [isVisible, setFilterform] = useState<boolean>(false);
  const filterHandler = () => {
    setFilterform(!isVisible);
    console.log("click");
  };

  useEffect(() => {
    getAllUsers().then((data: []) => {
      console.log(data);
      setUsers(data);
    });
  }, []);
  return (
    <div className="table_div">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500 }}
          aria-label="custom pagination table"
          className="table"
        >
          <TableHead>
            <TableRow className="table">
              <TableCell id="org">
                ORGANIZATION{" "}
                <img
                  src="images/userStatsIcons/filter.png"
                  alt=""
                  onClick={filterHandler}
                />
              </TableCell>
              <TableCell align="right" id="name">
                USERNAME{" "}
                <img
                  src="images/userStatsIcons/filter.png"
                  alt=""
                  onClick={filterHandler}
                />
              </TableCell>
              <TableCell align="right" id="email">
                EMAIL{" "}
                <img
                  src="images/userStatsIcons/filter.png"
                  alt=""
                  onClick={filterHandler}
                />
              </TableCell>
              <TableCell align="right" id="phone">
                PHONE NUMBER{" "}
                <img
                  src="images/userStatsIcons/filter.png"
                  alt=""
                  onClick={filterHandler}
                />
              </TableCell>
              <TableCell align="right" id="created">
                DATE JOINED{" "}
                <img
                  src="images/userStatsIcons/filter.png"
                  alt=""
                  onClick={filterHandler}
                />
              </TableCell>
              <TableCell align="right" id="stats">
                STATUS{" "}
                <img
                  src="images/userStatsIcons/filter.png"
                  alt=""
                  onClick={filterHandler}
                />
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : users
            ).map((user) => (
              <TableRow className="table">
                <TableCell component="th" scope="row" id="body_cell">
                  {user.orgName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right" id="body_cell1">
                  {user.userName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right" id="body_cell2">
                  {user.email}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right" id="body_cell3">
                  {user.phoneNumber}
                </TableCell>{" "}
                <TableCell style={{ width: 160 }} align="right" id="body_cell4">
                  {user.createdAt}
                </TableCell>{" "}
                <TableCell style={{ width: 160 }} align="right" id="body_cell5">
                  stats
                </TableCell>{" "}
                <TableCell style={{ width: 160 }} align="right" id="body_cell6">
                  <MoreVertIcon />
                </TableCell>{" "}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                id="pagination"
                rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <FilterForm
        className={isVisible ? "filter_visible" : "fiter_notVisible"}
      />
    </div>
  );
}
