import { useState } from 'react';
import { projects } from '../data';
import { ProjectItem } from '../types';
import { 
  CodeXml, 
  SquareTerminal, 
  Network, 
  Spline, 
  BookOpen, 
  Play, 
  Check, 
  Copy, 
  RefreshCw, 
  Sliders, 
  Info, 
  CornerDownRight, 
  Database,
  ArrowRightLeft,
  LayoutGrid
} from 'lucide-react';

export default function ProjectTabs() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('sandbox-compiler');
  const [activeSubTab, setActiveSubTab] = useState<'case-study' | 'live-demo'>('live-demo');
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const getProjectIcon = (logo: string, className = "h-5 w-5") => {
    switch (logo) {
      case 'CodeXml':
        return <CodeXml className={`${className} text-emerald-600`} />;
      case 'SquareTerminal':
        return <SquareTerminal className={`${className} text-indigo-600`} />;
      case 'Network':
        return <Network className={`${className} text-purple-600`} />;
      case 'Spline':
        return <Spline className={`${className} text-amber-600`} />;
      default:
        return <SquareTerminal className={className} />;
    }
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section className="py-12 border-t border-b border-neutral-900" id="projects-section">
      <div className="space-y-2 mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight" id="projects-heading">
          Projects Collection &amp; Live Labs
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl">
          An interactive suite of internal projects. Tap any slot in the matrix below to see the complete engineering case studies and trigger live in-browser demonstrations.
        </p>
      </div>

      {/* MATRIX OF TABS - Grid matching slots */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8" id="projects-tabs-matrix">
        {projects.map((proj) => {
          const isSelected = proj.id === selectedProjectId;
          return (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                // Keep the same sub-tab or default
              }}
              className={`flex items-start gap-3 p-3.5 rounded-xl text-left border transition-all duration-300 relative overflow-hidden group ${
                isSelected 
                  ? 'bg-[#141416]/90 border-emerald-500 shadow-md ring-1 ring-emerald-500' 
                  : 'bg-[#111113] border-neutral-850 hover:bg-[#141416] hover:border-neutral-700'
              }`}
              id={`tab-button-${proj.id}`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
              )}
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-850 shrink-0 shadow-xs">
                {getProjectIcon(proj.logo)}
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  {proj.category}
                </span>
                <span className="block text-sm font-bold text-neutral-200 group-hover:text-white mt-0.5 truncate">
                  {proj.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE PROJECT SUB-PANEL */}
      <div className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-[#111113]/40 shadow-xl flex flex-col gap-6" id="project-detail-layout">
        
        {/* Project Header Stats */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-900">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-neutral-900 text-emerald-400 border border-neutral-800">
                {selectedProject.category}
              </span>
              <span className="text-xs font-mono text-neutral-500">xinwei.io/labs/{selectedProject.id}</span>
            </div>
            
            <h3 className="font-display text-2xl font-extrabold text-white leading-none">
              {selectedProject.title}
            </h3>
            
            <p className="text-base text-neutral-300 max-w-3xl leading-relaxed">
              {selectedProject.longDesc}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1.5">
              {selectedProject.tags.map(t => (
                <span key={t} className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-0.5 border border-neutral-850 rounded-sm">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Sub-tab view buttons: Case Study vs Live Sandbox Demo */}
          <div className="flex bg-neutral-900 p-1 rounded-xl self-start lg:self-center font-medium border border-neutral-800 shadow-xs">
            <button
              onClick={() => setActiveSubTab('case-study')}
              className={`flex items-center gap-2 px-4 py-2 text-xs rounded-lg transition-all ${
                activeSubTab === 'case-study'
                  ? 'bg-neutral-800 text-white shadow-xs'
                  : 'text-neutral-450 hover:text-white'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Technical Study</span>
            </button>
            <button
              onClick={() => setActiveSubTab('live-demo')}
              className={`flex items-center gap-2 px-4 py-2 text-xs rounded-lg transition-all ${
                activeSubTab === 'live-demo'
                  ? 'bg-emerald-500 text-black font-semibold shadow-xs'
                  : 'text-neutral-450 hover:text-white'
              }`}
            >
              <Play className="h-4 w-4" />
              <span>Interactive Active Live Demo</span>
            </button>
          </div>
        </div>

        {/* CONTROLLER SWITCH AREA */}
        <div className="min-h-[420px]" id="tab-outlet-panels">
          {activeSubTab === 'case-study' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="case-study-panel">
              {/* Case Study texts */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">01. Architectural Challenge</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-[#0D0D10] p-4 border border-neutral-900 rounded-xl">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">02. Engineering Implementation</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-[#0D0D10] p-4 border border-neutral-900 rounded-xl">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-2">03. Key Outcomes</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {selectedProject.caseStudy.outcome.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Side Scorecard & Stats metric boxes */}
              <div className="lg:col-span-4 bg-[#0D0D10] p-6 rounded-2xl border border-neutral-900 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono uppercase font-extrabold tracking-wider text-neutral-500 mb-4 pb-2 border-b border-neutral-900">
                    Telemetry Stats
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-neutral-900 p-3 rounded-xl border border-neutral-850 hover:border-neutral-700 transition-colors">
                        <span className="block text-[10px] font-mono text-neutral-500 font-semibold uppercase">{metric.label}</span>
                        <span className="block font-display text-xl font-extrabold text-emerald-400 mt-0.5">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-900 text-xs text-neutral-500 font-mono flex items-center gap-1.5 justify-center">
                  <Info className="h-3.5 w-3.5" />
                  <span>Interactive calculations</span>
                </div>
              </div>
            </div>
          ) : (
            <div id="live-demo-panel">
              {/* Dynamic rendering based on project's demo type */}
              {selectedProject.demoType === 'sandbox-compiler' && <SandboxCompilerWidget />}
              {selectedProject.demoType === 'db-query-engine' && <DbQueryEngineWidget />}
              {selectedProject.demoType === 'network-visualizer' && <NetworkRouterWidget />}
              {selectedProject.demoType === 'canvas-vector' && <VectorBezierWidget onCopy={handleCopyCode} copied={copiedText} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   WIDGET 1: ProtoScript IDE Compiler Sandbox
   ======================================================== */
function SandboxCompilerWidget() {
  const [code, setCode] = useState<string>(
    "// Sample Draw\nforward 80\nright 90\ncolor emerald\nforward 85\nright 45\ncolor amber\nforward 60\nborder 3\npencil dot"
  );
  const [logs, setLogs] = useState<string[]>([
    "Sandbox initialized. Ready to parse tokens.",
    "System stack initialized."
  ]);
  const [renderedElements, setRenderedElements] = useState<any[]>([]);

  const handleRunCompiler = () => {
    const processLogs: string[] = ["=== Commencing Code Compile ==="];
    const lines = code.split("\n");
    let currentX = 50;
    let currentY = 180;
    let angleDegrees = 0; // facing right (0 = East)
    let strokeColor = "#4b5563"; // slate-600
    let strokeWidth = 2;
    let drawType = 'line';
    const elements: any[] = [];

    lines.forEach((lineText, index) => {
      const trimmed = lineText.trim();
      if (!trimmed || trimmed.startsWith("//")) return;

      const parts = trimmed.split(/\s+/);
      const command = parts[0].toLowerCase();
      const arg = parts[1];

      processLogs.push(`Line ${index + 1}: Executing opcode [${command}] with arg [${arg || 'void'}]`);

      switch (command) {
        case 'forward': {
          const distance = parseInt(arg, 10);
          if (isNaN(distance)) {
            processLogs.push(`[COMPILE ERROR] Line ${index + 1}: 'forward' requires numerical value`);
            break;
          }
          // Calculate destination
          const angleRad = (angleDegrees * Math.PI) / 180;
          const nextX = currentX + distance * Math.cos(angleRad);
          const nextY = currentY - distance * Math.sin(angleRad); // SVG coord system is inverted Y

          elements.push({
            id: `line-${index}`,
            type: drawType === 'line' ? 'line' : 'dot',
            x1: currentX,
            y1: currentY,
            x2: nextX,
            y2: nextY,
            color: strokeColor,
            width: strokeWidth
          });

          currentX = nextX;
          currentY = nextY;
          break;
        }
        case 'right': {
          const rotation = parseInt(arg, 10);
          if (isNaN(rotation)) {
            processLogs.push(`[COMPILE ERROR] Line ${index + 1}: 'right' requires numeric angle`);
            break;
          }
          angleDegrees = (angleDegrees - rotation) % 360;
          break;
        }
        case 'color': {
          if (arg === 'emerald') strokeColor = '#10b981';
          else if (arg === 'amber') strokeColor = '#f59e0b';
          else if (arg === 'rose') strokeColor = '#f43f5e';
          else if (arg === 'indigo') strokeColor = '#6366f1';
          else strokeColor = arg || '#4b5563';
          break;
        }
        case 'border': {
          const size = parseInt(arg, 10);
          if (!isNaN(size)) strokeWidth = size;
          break;
        }
        case 'pencil': {
          if (arg === 'dot' || arg === 'line') drawType = arg;
          break;
        }
        default: {
          processLogs.push(`[WARN] Line ${index + 1}: Command '${command}' unknown in stack instruction registry`);
        }
      }
    });

    processLogs.push(`[SUCCESS] Draw vectors generated: ${elements.length}. Render thread OK.`);
    setLogs(processLogs);
    setRenderedElements(elements);
  };

  const handleReset = () => {
    setCode("");
    setRenderedElements([]);
    setLogs(["Workspace cleared. Sandbox listening."]);
  };

  const loadExerciseTemplate1 = () => {
    setCode("// Staircase geometry\ncolor indigo\nborder 3\nforward 40\nright 90\nforward 40\nright -90\ncolor emerald\nforward 40\nright 90\nforward 40\nright -90\ncolor rose\nforward 40\nright 90\nforward 40");
    setLogs(["Loaded Staircase design template."]);
  };

  const loadExerciseTemplate2 = () => {
    setCode("// Spiral square geometry \ncolor rose\nborder 2\nforward 120\nright 90\ncolor amber\nforward 100\nright 90\ncolor emerald\nforward 80\nright 90\ncolor indigo\nforward 60\nright 90\ncolor slate\nforward 40");
    setLogs(["Loaded Nested Spiral design template."]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      {/* Code input stack */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-neutral-505 uppercase tracking-widest flex items-center gap-1.5">
            <Sliders className="h-3.5 w-3.5 text-emerald-500" /> Workspace editor
          </span>
          <div className="flex gap-1.5" id="compiler-preset-buttons">
            <button 
              onClick={loadExerciseTemplate1} 
              className="text-[10px] font-mono bg-neutral-905 hover:bg-neutral-800 text-neutral-300 px-2.5 py-1 border border-neutral-800 rounded font-semibold"
            >
              Ex_1: Staircase
            </button>
            <button 
              onClick={loadExerciseTemplate2} 
              className="text-[10px] font-mono bg-neutral-905 hover:bg-neutral-800 text-neutral-300 px-2.5 py-1 border border-neutral-800 rounded font-semibold"
            >
              Ex_2: Spiral
            </button>
          </div>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-56 font-mono text-xs p-4 bg-neutral-950 text-emerald-400 tracking-wide rounded-xl border border-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-700 select-text"
          placeholder="// Type ProtoScript expression layers here..."
          id="code-sandbox-editor"
        />

        <div className="flex gap-2">
          <button
            onClick={handleRunCompiler}
            className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5"
            id="compile-button"
          >
            <Play className="h-3.5 w-3.5 fill-black text-black" /> Compile &amp; Run Script
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 font-mono text-xs font-bold tracking-wide transition-all"
            id="clear-button"
          >
            Clear
          </button>
        </div>
      </div>

      {/* SVG Canvas Vector Graphic output */}
      <div className="lg:col-span-4 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
          CAD Graphic Vector Output
        </span>
        
        <div className="w-full h-68 rounded-xl border border-neutral-900 bg-neutral-950 shadow-inner relative overflow-hidden flex items-center justify-center">
          {/* Engineering coordinate lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute top-4 left-4 text-[9px] font-mono text-neutral-500">Y-axis Scale grid</div>

          {renderedElements.length > 0 ? (
            <svg className="w-full h-full" viewBox="0 0 300 240">
              {renderedElements.map((el) => {
                if (el.type === 'dot') {
                  return (
                    <circle 
                      key={el.id} 
                      cx={el.x2} 
                      cy={el.y2} 
                      r={el.width} 
                      fill={el.color} 
                    />
                  );
                }
                return (
                  <line
                    key={el.id}
                     x1={el.x1}
                    y1={el.y1}
                    x2={el.x2}
                    y2={el.y2}
                    stroke={el.color}
                    strokeWidth={el.width}
                    strokeLinecap="round"
                  />
                );
              })}
              {/* Virtual pencil coordinates locator */}
              {renderedElements.length > 0 && (
                <circle 
                  cx={renderedElements[renderedElements.length - 1].x2} 
                  cy={renderedElements[renderedElements.length - 1].y2} 
                  r="4" 
                  fill="#ef4444" 
                />
              )}
            </svg>
          ) : (
            <div className="text-center font-mono text-xs text-neutral-550 space-y-1">
              <p>Compiler Waiting...</p>
              <p className="text-[10px]">Click 'Compile &amp; Run' to render paths</p>
            </div>
          )}
        </div>
      </div>

      {/* VM system trace logging system */}
      <div className="lg:col-span-3 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1">
          <BookOpen className="h-3.5 w-3.5 text-emerald-500" /> Compiler Diagnostics
        </span>
        <div className="w-full h-68 rounded-xl border border-neutral-900 bg-neutral-950 p-3 h-64 overflow-y-auto space-y-1.5 text-[10px] font-mono text-neutral-400" id="diagnostic-console">
          {logs.map((logStr, idx) => (
            <div 
              key={idx} 
              className={
                logStr.includes('ERROR') 
                  ? 'text-rose-400' 
                  : logStr.includes('SUCCESS') 
                    ? 'text-emerald-400' 
                    : logStr.startsWith('==') 
                        ? 'text-neutral-200 border-b border-neutral-805 pb-1 font-bold' 
                        : 'text-neutral-500'
              }
            >
              &gt; {logStr}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   WIDGET 2: VertexDB SQL Relational Console Engine
   ======================================================== */
const usersTable = [
  { id: '1', name: 'Xinwei Fan', role: 'Staff Eng', level: 'Senior', signup: 2021 },
  { id: '2', name: 'Sarah Wu', role: 'Dev Advocate', level: 'Mid', signup: 2023 },
  { id: '3', name: 'Alex Rivera', role: 'Data Architect', level: 'Senior', signup: 2022 },
  { id: '4', name: 'Jordan Chen', role: 'Junior Web Dev', level: 'Junior', signup: 2024 }
];

const logsTable = [
  { userId: '1', action: 'compileDSL', code_size: 140, duration: 25 },
  { userId: '1', action: 'deployCloud', code_size: 450, duration: 80 },
  { userId: '2', action: 'blogEdit', code_size: 15, duration: 12 },
  { userId: '3', action: 'optimizeIndices', code_size: 920, duration: 110 },
  { userId: '4', action: 'fixButtonStyles', code_size: 45, duration: 45 }
];

function DbQueryEngineWidget() {
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [joinTable, setJoinTable] = useState<boolean>(true);
  const [sortField, setSortField] = useState<string>('id');
  const [queryPlan, setQueryPlan] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);

  const handleExecuteSQL = () => {
    const plans: string[] = ["Parsing AST query parameters..."];
    let finalDataset = [...usersTable];

    // Filter Step
    if (filterLevel !== 'all') {
      plans.push(`Applying filter branch: [Users.level EQUALS '${filterLevel}']`);
      plans.push(`INDEX MATCH SHORTCUT: Checked clustered hash index on 'level'`);
      finalDataset = finalDataset.filter(u => u.level === filterLevel);
    } else {
      plans.push("Applying sequential full table scanning scanning for: [No Filter]");
    }

    // Join Query Option
    let mappedResult = finalDataset.map(u => ({ ...u }));
    if (joinTable) {
      plans.push(`Performing inner relational join: [INNER JOIN Logs ON Users.id = Logs.userId]`);
      plans.push(`Algorithm: Hash-Join Map lookup built on Logs table.`);
      const joined: any[] = [];
      mappedResult.forEach(user => {
        const matchingLogs = logsTable.filter(l => l.userId === user.id);
        if (matchingLogs.length > 0) {
          matchingLogs.forEach(log => {
            joined.push({
              id: user.id,
              name: user.name,
              level: user.level,
              action: log.action,
              code_size: log.code_size,
              duration: log.duration
            });
          });
        }
      });
      mappedResult = joined;
    }

    // Sort order processing
    plans.push(`Ordering resulting stack collection key on [${sortField}]`);
    mappedResult.sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return valA - valB;
      }
      return String(valA).localeCompare(String(valB));
    });

    plans.push(`Result processing complete. Selected ${mappedResult.length} relational rows.`);
    setResults(mappedResult);
    setQueryPlan(plans);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      {/* Control panel options */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <span className="text-xs font-mono font-bold text-neutral-505 uppercase tracking-widest flex items-center gap-1">
          <Database className="h-3.5 w-3.5 text-emerald-500" /> Logical relational query console
        </span>

        <div className="p-5 rounded-xl border border-neutral-800 bg-[#0D0D10]/50 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-semibold text-neutral-500">Filter Users Level:</label>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="w-full bg-neutral-905 border border-neutral-800 text-xs p-2 rounded-lg text-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-750"
            >
              <option value="all">ALL Levels (Full-Table Scan)</option>
              <option value="Senior">Senior</option>
              <option value="Mid">Mid</option>
              <option value="Junior">Junior</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-1 bg-neutral-905 border border-neutral-800 rounded-lg">
            <span className="text-xs font-mono font-semibold text-neutral-505 pl-2">Relational INNER JOIN:</span>
            <button
              onClick={() => setJoinTable(!joinTable)}
              className={`text-[10px] font-mono px-3 py-1 rounded transition-colors ${
                joinTable ? 'bg-emerald-500 text-black font-bold' : 'bg-neutral-800 text-neutral-505'
              }`}
            >
              {joinTable ? 'JOINED Active' : 'Single Table Only'}
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-semibold text-neutral-505">Dynamic Sorting Column:</label>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="w-full bg-neutral-905 border border-neutral-800 text-xs p-2 rounded-lg text-neutral-305 focus:outline-none focus:ring-1 focus:ring-neutral-750"
            >
              <option value="id">User ID (Index Order)</option>
              <option value="name">Alpha Name Order</option>
              {joinTable && <option value="code_size">Code Size Metric</option>}
              {joinTable && <option value="duration">Runtime Duration</option>}
            </select>
          </div>

          <button
            onClick={handleExecuteSQL}
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-450 text-black font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <ArrowRightLeft className="h-4 w-4" /> Execute Logical Compiler
          </button>
        </div>
      </div>

      {/* Relational Table grid rendering */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
          Compiled Relational Grid dataset
        </span>

        <div className="w-full h-64 rounded-xl border border-neutral-900 bg-neutral-950 overflow-auto shadow-inner">
          {results.length > 0 ? (
            <table className="w-full text-left text-xs font-mono border-collapse divide-y divide-neutral-805">
              <thead className="bg-[#141416]/90 font-bold text-neutral-400">
                <tr>
                  <th className="px-3 py-2 border-r border-neutral-800">ID</th>
                  <th className="px-3 py-2 border-r border-neutral-800">Name</th>
                  <th className="px-3 py-2 border-r border-neutral-800">Level</th>
                  {joinTable ? (
                    <>
                      <th className="px-3 py-2 border-r border-neutral-800">Action OP</th>
                      <th className="px-3 py-2">Bytes</th>
                    </>
                  ) : (
                    <>
                      <th className="px-3 py-2 border-r border-neutral-800">Role</th>
                      <th className="px-3 py-2">Signup</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-850">
                {results.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-900/40">
                    <td className="px-3 py-2 border-r border-neutral-850 font-bold text-neutral-500">{row.id}</td>
                    <td className="px-3 py-2 border-r border-neutral-850 text-white font-semibold">{row.name}</td>
                    <td className="px-3 py-2 border-r border-neutral-850 font-medium">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        row.level === 'Senior' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/40' : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                      }`}>
                        {row.level}
                      </span>
                    </td>
                    {joinTable ? (
                      <>
                        <td className="px-3 py-2 border-r border-neutral-850 text-emerald-400 truncate max-w-[100px]" title={row.action}>
                          {row.action}
                        </td>
                        <td className="px-3 py-2 font-bold text-neutral-300">{row.code_size}kb</td>
                      </>
                    ) : (
                      <>
                        <td className="px-3 py-2 border-r border-neutral-850 text-neutral-400">{row.role}</td>
                        <td className="px-3 py-2 text-neutral-300">{row.signup}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <span className="font-mono text-xs text-neutral-550">Query processor empty.</span>
              <span className="text-[10px] text-neutral-600 mt-1">Select table options &amp; execute plan execution</span>
            </div>
          )}
        </div>
      </div>

      {/* Query profiling output logs */}
      <div className="lg:col-span-3 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
          Index Engine Planner Logs
        </span>

        <div className="w-full h-64 bg-neutral-950 p-4 rounded-xl border border-neutral-900 overflow-y-auto space-y-1.5 text-[10px] font-mono text-neutral-400">
          {queryPlan.length > 0 ? (
            queryPlan.map((step, index) => (
              <div 
                key={index} 
                className={
                  step.startsWith('INDEX MATCH') 
                    ? 'text-emerald-400 font-semibold' 
                    : step.includes('Relational') 
                        ? 'text-indigo-400' 
                        : 'text-neutral-500'
                }
              >
                &gt; {step}
              </div>
            ))
          ) : (
            <div className="text-neutral-555">
              No plan executed. Listening...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   WIDGET 3: TraceRoute Networking Graph Router Diagram
   ======================================================== */
const networkGraphNodes = [
  { id: 'A', name: 'Source A', x: 40, y: 120, ip: '192.168.1.1' },
  { id: 'B', name: 'Gateway B', x: 120, y: 55, ip: '10.0.0.1' },
  { id: 'C', name: 'Gateway C', x: 120, y: 185, ip: '10.0.0.2' },
  { id: 'D', name: 'Router D', x: 220, y: 120, ip: '172.16.8.5' },
  { id: 'E', name: 'Destination E', x: 300, y: 120, ip: '8.8.8.8' }
];

const networkEdges = [
  { source: 'A', target: 'B', latency: 12 },
  { source: 'A', target: 'C', latency: 25 },
  { source: 'B', target: 'D', latency: 15 },
  { source: 'C', target: 'D', latency: 8 },
  { source: 'D', target: 'E', latency: 5 }
];

function NetworkRouterWidget() {
  const [startNode, setStartNode] = useState<string>('A');
  const [endNode, setEndNode] = useState<string>('E');
  const [packetStatus, setPacketStatus] = useState<'idle' | 'pinging' | 'completed'>('idle');
  const [logs, setLogs] = useState<string[]>(["Core simulation socket ready."]);
  const [calculatedPath, setCalculatedPath] = useState<string[]>(['A', 'B', 'D', 'E']);

  const handleTogglePing = () => {
    setPacketStatus('pinging');
    setLogs(["Generating ping package parameters...", "Header: TTL=64 PROTOCOL=ICMP DATA=32bytes"]);

    // Minimal timing simulation
    setTimeout(() => {
      setLogs(l => [...l, `Sender dispatched package -> routing via [${calculatedPath.join(' -> ')}]`]);
    }, 600);

    setTimeout(() => {
      setLogs(l => [...l, `Destination [${endNode}] acknowledged request in 38ms. Reply OK.`]);
      setPacketStatus('completed');
    }, 1500);
  };

  const handleNodeClick = (nodeId: string) => {
    if (nodeId === 'E') return; // let E remain end node for clear loop
    setStartNode(nodeId);
    
    // Dynamic calculate path sequence
    // Simple custom routing representation to showcase logic in front-end
    if (nodeId === 'A') {
      setCalculatedPath(['A', 'B', 'D', 'E']);
      setLogs([`Active Source updated: Node [A]`]);
    } else if (nodeId === 'B') {
      setCalculatedPath(['B', 'D', 'E']);
      setLogs([`Active Source updated: Node [B]`]);
    } else if (nodeId === 'C') {
      setCalculatedPath(['C', 'D', 'E']);
      setLogs([`Active Source updated: Node [C]`]);
    } else {
      setCalculatedPath(['D', 'E']);
      setLogs([`Active Source updated: Node [D]`]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      {/* Instructions & setup triggers */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <span className="text-xs font-mono font-bold text-neutral-505 uppercase tracking-widest flex items-center gap-1.5">
          <Network className="h-4 w-4 text-emerald-500" /> Graph topological network simulation
        </span>

        <div className="p-5 rounded-xl border border-neutral-800 bg-[#0D0D10]/50 space-y-4">
          <p className="text-xs text-neutral-400 leading-relaxed">
            Click on any available router circles in the visualizer matrix on the right to reset trace nodes and dynamically recalculate absolute paths in real time.
          </p>

          <div className="bg-[#141416] p-3 rounded-lg border border-neutral-805 flex justify-between text-xs">
            <span className="font-mono text-neutral-500">Selected Path:</span>
            <span className="font-mono font-bold text-emerald-450 uppercase">
              {calculatedPath.join(' ➔ ')}
            </span>
          </div>

          <button
            onClick={handleTogglePing}
            disabled={packetStatus === 'pinging'}
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-450 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${packetStatus === 'pinging' ? 'animate-spin text-neutral-500' : 'text-black'}`} /> 
            {packetStatus === 'pinging' ? 'Sending Packet ping...' : 'Dispatch Packet Ping'}
          </button>
        </div>
      </div>

      {/* SVG graph mapper */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
          SVG Active Topological Mesh Graph
        </span>

        <div className="w-full h-64 rounded-xl border border-neutral-900 bg-neutral-950 relative overflow-hidden flex items-center justify-center select-none shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <svg className="w-full h-full" viewBox="0 0 350 240">
            {/* Draw Links/Edges */}
            {networkEdges.map((edge, idx) => {
              const srcNode = networkGraphNodes.find(n => n.id === edge.source)!;
              const tgtNode = networkGraphNodes.find(n => n.id === edge.target)!;
              const isInPath = calculatedPath.includes(edge.source) && calculatedPath.includes(edge.target);

              return (
                <g key={idx}>
                  <line
                    x1={srcNode.x}
                    y1={srcNode.y}
                    x2={tgtNode.x}
                    y2={tgtNode.y}
                    stroke={isInPath ? '#10b981' : '#222225'}
                    strokeWidth={isInPath ? 3 : 1.5}
                    className="transition-all duration-300"
                  />
                  {/* Floating latency label */}
                  <rect 
                    x={(srcNode.x + tgtNode.x) / 2 - 12} 
                    y={(srcNode.y + tgtNode.y) / 2 - 8} 
                    width="24" 
                    height="14" 
                    rx="3" 
                    fill="#111113" 
                    stroke={isInPath ? '#10b981' : '#222225'} 
                    strokeWidth="0.5" 
                  />
                  <text
                    x={(srcNode.x + tgtNode.x) / 2}
                    y={(srcNode.y + tgtNode.y) / 2 + 2}
                    textAnchor="middle"
                    className="text-[8px] font-mono font-semibold fill-neutral-400"
                  >
                    {edge.latency}ms
                  </text>
                </g>
              );
            })}

            {/* Pulsing tracer packets */}
            {packetStatus === 'pinging' && (
              <circle r="6" fill="#10b981">
                <animateMotion 
                  path={`M 40,120 L 120,${calculatedPath.includes('B') ? 55 : 185} L 220,120 L 300,120`} 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
            )}

            {/* Render Nodes */}
            {networkGraphNodes.map((node) => {
              const isSelectedSource = node.id === startNode;
              const isDestination = node.id === endNode;
              const isActiveRouteNode = calculatedPath.includes(node.id);

              return (
                <g 
                  key={node.id} 
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer group"
                  onClick={() => handleNodeClick(node.id)}
                >
                  <circle
                    r="15"
                    fill={isSelectedSource ? '#10b981' : isDestination ? '#ef4444' : isActiveRouteNode ? '#141416' : '#0d0d0f'}
                    stroke={isSelectedSource ? '#10b981' : isDestination ? '#ef4444' : isActiveRouteNode ? '#10b981' : '#26262a'}
                    strokeWidth={isActiveRouteNode || isSelectedSource ? '2.5' : '1.5'}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                  <text
                    textAnchor="middle"
                    y="3"
                    className={`text-[9px] font-mono font-bold select-none pointer-events-none transition-colors ${
                      isSelectedSource || isDestination ? 'fill-black font-extrabold' : 'fill-neutral-300'
                    }`}
                  >
                    {node.id}
                  </text>
                  <text
                    y="25"
                    textAnchor="middle"
                    className="text-[7px] font-mono fill-neutral-500 font-semibold select-none pointer-events-none uppercase group-hover:fill-emerald-400"
                  >
                    {node.ip}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Simulator trace execution console */}
      <div className="lg:col-span-3 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
          Packet Router diagnostic terminal logs
        </span>

        <div className="w-full h-64 bg-neutral-950 p-4 rounded-xl border border-neutral-900 overflow-y-auto space-y-1.5 text-[10px] font-mono text-neutral-400">
          {logs.map((step, idx) => (
            <div 
              key={idx} 
              className={
                step.includes('dispatched') 
                  ? 'text-indigo-400 font-semibold' 
                  : step.includes('acknowledged') 
                    ? 'text-emerald-400 font-bold' 
                    : 'text-neutral-500'
              }
            >
              &gt; {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   WIDGET 4: Bezier Vector Interactive CAD drawing generator
   ======================================================== */
interface BezierProps {
  onCopy: (str: string) => void;
  copied: boolean;
}function VectorBezierWidget({ onCopy, copied }: BezierProps) {
  const [cp1x, setCp1x] = useState<number>(100);
  const [cp1y, setCp1y] = useState<number>(40);
  const [cp2x, setCp2x] = useState<number>(200);
  const [cp2y, setCp2y] = useState<number>(40);

  // Constants
  const startX = 40;
  const startY = 160;
  const endX = 280;
  const endY = 160;

  const generatedPath = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  const generatedSVGText = `<svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="${generatedPath}" stroke="#10b981" stroke-width="3" stroke-linecap="round" />\n</svg>`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      {/* Vector path node values and sliders */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <span className="text-xs font-mono font-bold text-neutral-505 uppercase tracking-widest flex items-center gap-1.5">
          <Spline className="h-4 w-4 text-emerald-500" /> Bézier Mathematical Control Sliders
        </span>

        <div className="p-5 rounded-xl border border-neutral-800 bg-[#0D0D10]/50 space-y-4">
          <p className="text-xs text-neutral-400 leading-relaxed">
            Drag sliders below to manipulate mathematical coordinates for Control Node 1 (CP1) and Control Node 2 (CP2).
          </p>

          <div className="space-y-3.5">
            <div>
              <div className="flex justify-between text-[11px] font-mono font-semibold text-neutral-500 pb-1">
                <span>CP1 X-axis:</span>
                <span className="text-emerald-400 font-bold">{cp1x}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="320"
                value={cp1x}
                onChange={(e) => setCp1x(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-neutral-900 rounded-lg text-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono font-semibold text-neutral-500 pb-1">
                <span>CP1 Y-axis:</span>
                <span className="text-emerald-400 font-bold">{cp1y}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={cp1y}
                onChange={(e) => setCp1y(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-neutral-900 rounded-lg text-emerald-500"
              />
            </div>

            <div className="border-t border-neutral-800 pt-2" />

            <div>
              <div className="flex justify-between text-[11px] font-mono font-semibold text-neutral-500 pb-1">
                <span>CP2 X-axis:</span>
                <span className="text-emerald-400 font-bold">{cp2x}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="320"
                value={cp2x}
                onChange={(e) => setCp2x(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-neutral-900 rounded-lg text-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono font-semibold text-neutral-500 pb-1">
                <span>CP2 Y-axis:</span>
                <span className="text-emerald-400 font-bold">{cp2y}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={cp2y}
                onChange={(e) => setCp2y(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-neutral-900 rounded-lg text-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SVG rendering visual representation */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
          SVG CAD grid mathematical canvas representation
        </span>

        <div className="w-full h-64 rounded-xl border border-neutral-900 bg-neutral-950 relative overflow-hidden flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <svg className="w-full h-full" viewBox="0 0 320 200">
            {/* Draw mathematical grids structure and borders */}
            <circle cx={startX} cy={startY} r="4" fill="#3b3b40" />
            <circle cx={endX} cy={endY} r="4" fill="#3b3b40" />

            {/* Guide lines from anchors to control handles */}
            <line x1={startX} y1={startY} x2={cp1x} y2={cp1y} stroke="#10b981" strokeWidth="0.75" strokeDasharray="3,3" className="opacity-60" />
            <line x1={endX} y1={endY} x2={cp2x} y2={cp2y} stroke="#10b981" strokeWidth="0.75" strokeDasharray="3,3" className="opacity-60" />

            {/* Drawing handles markers */}
            <circle cx={cp1x} cy={cp1y} r="5" fill="#10b981" />
            <text x={cp1x} y={cp1y - 8} textAnchor="middle" className="text-[8px] font-mono fill-emerald-400 font-bold">CP1</text>

            <circle cx={cp2x} cy={cp2y} r="5" fill="#10b981" />
            <text x={cp2x} y={cp2y - 8} textAnchor="middle" className="text-[8px] font-mono fill-emerald-400 font-bold">CP2</text>

            {/* Active Rendered Path bezier Curve */}
            <path
              d={generatedPath}
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Output clipboard code pane */}
      <div className="lg:col-span-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
            Generated SVG element syntax code
          </span>
          <button
            onClick={() => onCopy(generatedSVGText)}
            className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 p-1 px-2 rounded font-semibold transition-colors"
          >
            {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="w-full h-64 bg-neutral-950 p-4 rounded-xl border border-neutral-900 overflow-auto text-[9px] font-mono text-neutral-400 leading-normal" id="code-clipboard-output">
          <pre className="text-emerald-400">{generatedSVGText}</pre>
        </div>
      </div>
    </div>
  );
}
