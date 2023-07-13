import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useCustomTheme } from "../../utils/theme";
import workData from "./workExperience.json";
import education from "./educationExperience.json";

interface WorkColumn {
  id: "workplace" | "responsibilities";
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
interface EducationColumn {
  id: "institution" | "achievements";
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
const workColumns: WorkColumn[] = [
  { id: "workplace", minWidth: 100 },
  { id: "responsibilities", minWidth: 170 },
];

const educationColumns: EducationColumn[] = [
  { id: "institution", minWidth: 100 },
  { id: "achievements", minWidth: 170 },
];

interface WorkplaceData {
  name: string;
  location: string;
  startYear: string;
  startMonth: string;
  endYear: string | undefined;
  endMonth: string | undefined;
}

interface EducationData {
  name: string;
  startYear: string;
  startMonth: string;
  endYear: string | undefined;
  endMonth: string | undefined;
  additional: string | undefined;
  title: string;
  achievements: string[];
}

interface WorkData {
  workplace: WorkplaceData;
  title: string;
  responsibilities: string[];
}
const educationData: EducationData[] = education.data;
function createWorkData(d: {
  name: string;
  location: string;
  title: string;
  startMonth: string;
  startYear: string;
  endMonth: string | undefined;
  endYear: string | undefined;
  responsibilities: string[];
}): WorkData {
  const {
    name,
    location,
    startMonth,
    startYear,
    endMonth,
    endYear,
    title,
    responsibilities,
  } = d;
  const workplace = {
    name,
    location,
    startMonth,
    startYear,
    endMonth,
    endYear,
  };
  return {
    workplace,
    title,
    responsibilities,
  };
}

const workRows = workData.data.map((a) => createWorkData(a));

const ResumeTable = () => {
  const theme = useCustomTheme();
  let counter = 1;
  const colour = [theme.primary, "white"];
  const getCurrentColour = () => {
    const c = colour[counter % 2];
    counter += 1;
    return c;
  };
  const getOtherColour = () => {
    return colour[counter % 2];
  };
  return (
    <div className="resume-table">
      <Paper
        elevation={0}
        sx={{
          maxHeight: "80vh",
          width: "75%",
          background: "transparent",
          overflow: "auto",
          paddingRight: "20px",
        }}
      >
        <TableContainer sx={{ background: "transparent" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  colSpan={2}
                  sx={{
                    background: "transparent",
                    borderBottomColor: "transparent",
                    color: getCurrentColour,
                  }}
                >
                  <h2>
                    <code>Work Experience</code>
                  </h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workRows.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.workplace.name}
                    sx={{ color: getCurrentColour() }}
                  >
                    {workColumns.map((column) => {
                      const value = row[column.id];
                      return column.id == "workplace" ? (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            verticalAlign: "top",
                          }}
                          sx={{
                            color: getCurrentColour(),
                            borderBottomColor: "transparent",
                          }}
                        >
                          <div className="resume-workplace-details">
                            <div className="resume-workplace-details_name">
                              {row.workplace.name}
                            </div>
                            <div
                              className="resume-workplace-details_date"
                              style={{ color: getOtherColour() }}
                            >
                              {`${row.workplace.startMonth} ${
                                row.workplace.startYear
                              } to ${
                                row.workplace.endMonth && row.workplace.endYear
                                  ? row.workplace.endMonth +
                                    " " +
                                    row.workplace.endYear
                                  : "Present"
                              } `}
                            </div>
                            <div className="resume-workplace-details_location">
                              {row.workplace.location}
                            </div>
                          </div>
                        </TableCell>
                      ) : (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                          sx={{
                            color: getCurrentColour(),
                            borderBottomColor: "transparent",
                          }}
                        >
                          <div className="resume-workplace-title">
                            <code>{row.title}</code>
                          </div>
                          <div className="resume-workplace-responsibilities">
                            <ul>
                              {Array.isArray(value)
                                ? value.map((a) => {
                                    return <li>{a}</li>;
                                  })
                                : ""}
                            </ul>
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  colSpan={2}
                  sx={{
                    background: "transparent",
                    borderBottomColor: "transparent",
                    color: theme.primary,
                  }}
                >
                  <h2>
                    <code>Education</code>
                  </h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educationData.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name}
                    sx={{ color: getCurrentColour() }}
                  >
                    {educationColumns.map((column) => {
                      return column.id == "institution" ? (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            verticalAlign: "top",
                          }}
                          sx={{
                            color: getCurrentColour(),
                            borderBottomColor: "transparent",
                          }}
                        >
                          <div className="resume-workplace-details">
                            <div className="resume-workplace-details_name">
                              {row.name}
                            </div>
                            <div
                              className="resume-workplace-details_date"
                              style={{ color: getOtherColour() }}
                            >
                              {`${row.startMonth} ${row.startYear} to ${
                                row.endMonth && row.endYear
                                  ? row.endMonth + " " + row.endYear
                                  : "Present"
                              } `}
                            </div>
                            <div className="resume-workplace-details_location">
                              {row.additional}
                            </div>
                          </div>
                        </TableCell>
                      ) : (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                          sx={{
                            color: getCurrentColour(),
                            borderBottomColor: "transparent",
                          }}
                        >
                          <div className="resume-workplace-title">
                            <code>{row.title}</code>
                          </div>
                          <div className="resume-workplace-responsibilities">
                            <ul>
                              {row.achievements.map((a) => {
                                return <li>{a}</li>;
                              })}
                            </ul>
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ResumeTable;
